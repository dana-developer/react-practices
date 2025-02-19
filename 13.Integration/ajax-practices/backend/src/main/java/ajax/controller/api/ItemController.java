package ajax.controller.api;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ajax.domain.Item;
import ajax.dto.JsonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;

@Tag(name = "ItemController", description = "Item APIs")
@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;

	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}

	@PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item) {
		log.info("Request[POST /item, Content-Type : application/json] [{}]", item);

		// Optional maxId = Optional.ofNullable(items.isEmpty() ? null :
		// items.getFirst())
		// .map(new Function<Item, Long>() {
		// @Override
		// public Long apply(Item t) {
		// return t.getId();
		// }
		// });

		Long maxId = Optional
				.ofNullable(items.isEmpty() ? null : items.getFirst())
				.map(t -> t.getId())
				.orElse(0L); // 만약 null이면 설정 가능!

		item.setId(maxId+1L);
		items.addFirst(item);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
	}
	

	@Operation(summary = "Create a New Item")
	@ApiResponses(value = {
	       @ApiResponse(responseCode = "200", description = "successful operation", content = @Content(schema = @Schema(implementation = JsonResult.class))),
	       @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content(schema = @Schema(implementation = JsonResult.class)))
	})
	@PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}) // accept 헤더의 내용을 위의 create와 다르게 함.
	public ResponseEntity<JsonResult<Item>> create(Item item, MultipartFile file) {
		log.info("Request[POST /item, Content-Type : multipart/form-data] [{}, {}]", item, file.getOriginalFilename());
		
		try {
			final String saveFilename = UUID
					.randomUUID()
					.toString()
					.concat(".")
					.concat(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.')+1));
			
			Files.write(Files
				.createDirectories(Paths.get("/Users/dayeon/Desktop/포스코DX/sts-workspace/react-practices/13.Integration/ajax-practices/backend/src/main/resources/ajax-practices-uploads/images"))
				.resolve(saveFilename), file.getBytes());
				
			Long maxId = Optional
				.ofNullable(items.isEmpty() ? null : items.getFirst())
				.map(t -> t.getId())
				.orElse(0L);

			item.setId(maxId+1L);
			item.setImage("/assets/images/" + saveFilename);
			items.addFirst(item);
			
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(item));
			
		} catch(Exception ex) {
			throw new RuntimeException(ex);
		}
	}

	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read() {
		log.info("Request[GET /item]");
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(items));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id) {
		log.info("Update[GET /item/{}]", id);
		// stream() : 배열 반환하므로 한 개만 반환하는 findAny 사용
		Item item = items.stream().filter(t -> t.getId() == id).findAny().orElse(null);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(item));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long id) {
		log.info("Request[DELETE /item/{}]", id);
		
//		items.removeIf(new Predicate<Item>() {
//
//			@Override
//			public boolean test(Item t) {
//				// true이면 해당 아이템 삭제
//				return t.getId() == id;
//			}
//			
//		});
		
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.removeIf(t -> t.getId() == id) ? id : -1));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> update(@PathVariable Long id, Item item) {
		log.info("Update[PUT /item/{}, Content-Type:application/x-www.form-urlencoded][{}]",id, item);
		
//		int index = items.indexOf(new Item(id));
//		Item itemUpdate = items.get(index);
//		itemUpdate.setName(item.getName());
//		itemUpdate.setType(item.getType());
		
		int index = items.indexOf(new Item(id));
		Optional<Item> optionalItem = Optional.ofNullable((index == -1 ? null : items.get(index)));
		optionalItem.ifPresent((Item t) -> {
			t.setName(item.getName());
			t.setType(item.getType());
		});
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(optionalItem.orElse(null)));
	}

}
